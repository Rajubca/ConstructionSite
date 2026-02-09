from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # 1. Home Page
        page.goto("http://localhost:3000")
        page.wait_for_selector("h1")
        page.screenshot(path="verification/home_page.png", full_page=True)
        print("Captured Home Page")

        # 2. Services Page
        page.goto("http://localhost:3000/services")
        page.wait_for_selector("h1")
        page.screenshot(path="verification/services_page.png", full_page=True)
        print("Captured Services Page")

        # 3. Portfolio Page
        page.goto("http://localhost:3000/portfolio")
        page.wait_for_selector("h1")
        page.screenshot(path="verification/portfolio_page.png", full_page=True)
        print("Captured Portfolio Page")

        # 4. Contact Page
        page.goto("http://localhost:3000/contact")
        page.wait_for_selector("h1")
        page.screenshot(path="verification/contact_page.png", full_page=True)
        print("Captured Contact Page")

        # 5. Login Page
        page.goto("http://localhost:3000/login")
        page.wait_for_selector("h1")
        page.screenshot(path="verification/login_page.png", full_page=True)
        print("Captured Login Page")

        browser.close()

if __name__ == "__main__":
    run()
