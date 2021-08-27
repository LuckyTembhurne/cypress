Feature: IBM Sanity

    Sanity on application

    Scenario: EMEA sanity
    Given Login to "DEV_IBM" with user "ePricerIBMauto"
    When Select role "EMEA"-"ROLE01"
    And Create a new quote
    Then Verify quote status as "Ongoing"
    And Fill overview data with country "FR", title "IBM EMEA Sanity", channel "A", solution "BU" and crad "30 Dec 2021"      
    And Search and retreive IBM customer with name "AIGLE*"
    And Add "HP" "7014"-"T42" manual component with quantity "1"
    And Perform collect pricing


    Scenario: NA sanity
    Given Login to "DEV_IBM" with user "ePricerIBMauto"
    When Select role "NA"-"ROLE01"
    And Create a new quote
    Then Verify quote status as "Ongoing"
    And Fill overview data with country "CA", title "IBM NA Sanity", channel "A", solution "BU" and crad "30 Dec 2021"
    And Search and retreive IBM customer with name "BA*"
    And Add "HP" "7014"-"T42" manual component with quantity "4"
    And Perform collect pricing

