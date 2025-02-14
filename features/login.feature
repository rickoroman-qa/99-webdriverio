Feature: Login Functionality

  Scenario: Successful Login
    Given the user launches the app
    When the user clicks on the Login menu
    And the user logs in with "rroyahinf@gmail.com" and "P@ssw0rd"
    Then the user should be logged in successfully

  Scenario: Failed Login
    Given the user launches the app
    When the user clicks on the Login menu
    And the user logs in with "invalid@email.com" and "wrongpassword"
    Then the user should see an error message
