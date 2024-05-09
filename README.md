# Playwright 30718 reproduction

To reproduce:

1. Install deps (or open in codespace/devcontainer)
2. `npx playwright test --ui`
3. Run the "no bug" test until it times out. The timeline and preview window should be visible after the test has finished.
4. Run the "reproduce bug" test until it times out. The timelilne and preview window will disappear.
