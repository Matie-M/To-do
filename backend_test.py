import requests
import sys
from datetime import datetime, timedelta

class TodoAPITester:
    def __init__(self, base_url="https://todo-tracker-165.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.created_task_ids = []

    def run_test(self, name, method, endpoint, expected_status, data=None, params=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, params=params)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=headers)
            elif method == 'PATCH':
                response = requests.patch(url, headers=headers)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}")

            return success, response.json() if response.text and response.status_code != 204 else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test root endpoint"""
        success, response = self.run_test(
            "Root Endpoint",
            "GET",
            "",
            200
        )
        return success

    def test_create_task(self, title, description, due_date, category):
        """Create a task"""
        success, response = self.run_test(
            f"Create Task: {title}",
            "POST",
            "api/tasks",
            201,
            data={
                "title": title,
                "description": description,
                "due_date": due_date,
                "category": category
            }
        )
        if success and 'id' in response:
            self.created_task_ids.append(response['id'])
            return response['id']
        return None

    def test_get_all_tasks(self):
        """Get all tasks"""
        success, response = self.run_test(
            "Get All Tasks",
            "GET",
            "api/tasks",
            200
        )
        if success:
            print(f"   Found {len(response)} tasks")
        return success, response

    def test_get_tasks_by_status(self, status):
        """Get tasks filtered by status"""
        success, response = self.run_test(
            f"Get Tasks by Status: {status}",
            "GET",
            "api/tasks",
            200,
            params={"status": status}
        )
        if success:
            print(f"   Found {len(response)} {status} tasks")
        return success, response

    def test_get_tasks_by_category(self, category):
        """Get tasks filtered by category"""
        success, response = self.run_test(
            f"Get Tasks by Category: {category}",
            "GET",
            "api/tasks",
            200,
            params={"category": category}
        )
        if success:
            print(f"   Found {len(response)} {category} tasks")
        return success, response

    def test_update_task(self, task_id, update_data):
        """Update a task"""
        success, response = self.run_test(
            f"Update Task: {task_id}",
            "PUT",
            f"api/tasks/{task_id}",
            200,
            data=update_data
        )
        return success, response

    def test_toggle_task(self, task_id):
        """Toggle task completion"""
        success, response = self.run_test(
            f"Toggle Task: {task_id}",
            "PATCH",
            f"api/tasks/{task_id}/toggle",
            200
        )
        return success, response

    def test_delete_task(self, task_id):
        """Delete a task"""
        success, _ = self.run_test(
            f"Delete Task: {task_id}",
            "DELETE",
            f"api/tasks/{task_id}",
            204
        )
        return success

    def cleanup(self):
        """Delete all created tasks"""
        print("\n🧹 Cleaning up created tasks...")
        for task_id in self.created_task_ids:
            try:
                requests.delete(f"{self.base_url}/api/tasks/{task_id}")
            except:
                pass

def main():
    tester = TodoAPITester()
    
    print("=" * 60)
    print("🚀 Starting To-Do App Backend API Tests")
    print("=" * 60)

    # Test 1: Root endpoint
    tester.test_root_endpoint()

    # Test 2: Create tasks with different categories
    today = datetime.now().isoformat()
    tomorrow = (datetime.now() + timedelta(days=1)).isoformat()
    yesterday = (datetime.now() - timedelta(days=1)).isoformat()

    task1_id = tester.test_create_task(
        "Complete project report",
        "Write and submit the Q4 project report",
        tomorrow,
        "Work"
    )

    task2_id = tester.test_create_task(
        "Buy groceries",
        "Milk, eggs, bread, vegetables",
        today,
        "Shopping"
    )

    task3_id = tester.test_create_task(
        "Morning jog",
        "30 minutes cardio exercise",
        today,
        "Health"
    )

    task4_id = tester.test_create_task(
        "Call mom",
        "Weekly catch-up call",
        yesterday,
        "Personal"
    )

    task5_id = tester.test_create_task(
        "Read book",
        "Finish chapter 5",
        None,
        "Other"
    )

    # Test 3: Get all tasks
    success, all_tasks = tester.test_get_all_tasks()
    if not success or len(all_tasks) < 5:
        print("❌ Failed to retrieve all created tasks")

    # Test 4: Filter by status - all
    tester.test_get_tasks_by_status("all")

    # Test 5: Filter by status - active
    success, active_tasks = tester.test_get_tasks_by_status("active")
    if success and len(active_tasks) != 5:
        print(f"⚠️  Warning: Expected 5 active tasks, got {len(active_tasks)}")

    # Test 6: Toggle task completion
    if task1_id:
        success, toggled_task = tester.test_toggle_task(task1_id)
        if success and toggled_task.get('completed') != True:
            print("❌ Task completion toggle failed - task not marked as completed")

    # Test 7: Filter by status - completed
    success, completed_tasks = tester.test_get_tasks_by_status("completed")
    if success and len(completed_tasks) != 1:
        print(f"⚠️  Warning: Expected 1 completed task, got {len(completed_tasks)}")

    # Test 8: Filter by status - active (after toggle)
    success, active_tasks = tester.test_get_tasks_by_status("active")
    if success and len(active_tasks) != 4:
        print(f"⚠️  Warning: Expected 4 active tasks, got {len(active_tasks)}")

    # Test 9: Filter by category - Work
    success, work_tasks = tester.test_get_tasks_by_category("Work")
    if success and len(work_tasks) != 1:
        print(f"⚠️  Warning: Expected 1 Work task, got {len(work_tasks)}")

    # Test 10: Filter by category - Shopping
    success, shopping_tasks = tester.test_get_tasks_by_category("Shopping")
    if success and len(shopping_tasks) != 1:
        print(f"⚠️  Warning: Expected 1 Shopping task, got {len(shopping_tasks)}")

    # Test 11: Update task
    if task2_id:
        success, updated_task = tester.test_update_task(
            task2_id,
            {
                "title": "Buy groceries - UPDATED",
                "description": "Milk, eggs, bread, vegetables, fruits",
                "category": "Shopping"
            }
        )
        if success:
            if updated_task.get('title') != "Buy groceries - UPDATED":
                print("❌ Task update failed - title not updated")
            if updated_task.get('description') != "Milk, eggs, bread, vegetables, fruits":
                print("❌ Task update failed - description not updated")

    # Test 12: Toggle task back to incomplete
    if task1_id:
        success, toggled_task = tester.test_toggle_task(task1_id)
        if success and toggled_task.get('completed') != False:
            print("❌ Task completion toggle failed - task not marked as incomplete")

    # Test 13: Delete task
    if task5_id:
        success = tester.test_delete_task(task5_id)
        if success:
            # Verify deletion
            success, all_tasks = tester.test_get_all_tasks()
            if success and len(all_tasks) != 4:
                print(f"⚠️  Warning: Expected 4 tasks after deletion, got {len(all_tasks)}")

    # Test 14: Test invalid category (should fail)
    print("\n🔍 Testing Create Task with Invalid Category...")
    tester.tests_run += 1
    try:
        response = requests.post(
            f"{tester.base_url}/api/tasks",
            json={
                "title": "Invalid task",
                "description": "This should fail",
                "category": "InvalidCategory"
            },
            headers={'Content-Type': 'application/json'}
        )
        if response.status_code == 422:
            tester.tests_passed += 1
            print("✅ Passed - Correctly rejected invalid category (422)")
        else:
            print(f"❌ Failed - Expected 422, got {response.status_code}")
    except Exception as e:
        print(f"❌ Failed - Error: {str(e)}")

    # Test 15: Test missing required field (should fail)
    print("\n🔍 Testing Create Task without Title...")
    tester.tests_run += 1
    try:
        response = requests.post(
            f"{tester.base_url}/api/tasks",
            json={
                "description": "This should fail",
                "category": "Work"
            },
            headers={'Content-Type': 'application/json'}
        )
        if response.status_code == 422:
            tester.tests_passed += 1
            print("✅ Passed - Correctly rejected missing title (422)")
        else:
            print(f"❌ Failed - Expected 422, got {response.status_code}")
    except Exception as e:
        print(f"❌ Failed - Error: {str(e)}")

    # Cleanup
    tester.cleanup()

    # Print results
    print("\n" + "=" * 60)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    print("=" * 60)
    
    if tester.tests_passed == tester.tests_run:
        print("✅ All tests passed!")
        return 0
    else:
        print(f"❌ {tester.tests_run - tester.tests_passed} test(s) failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())
