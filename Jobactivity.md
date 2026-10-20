## Job Activity – Labour and Truck Cost Price & Sell Price Clarifications

### 1. Labour Cost and Sell Price

**Question:**  
The Quotation calculation supports different types of labour, whereas Job Activity currently captures only the number of labour resources and does not identify the labour type.

**Confirmed approach:**  
- For **onsite diary actions**, use:
  - **Foreman rate** for the supervisor.
  - **Standard labour rate** for the crew.
- For **other diary categories**, use the **standard labour rate** only and ignore foreman, art technicians, or other specific labour types.
- In the future, we will look at mapping Moveware (MW) with the relevant labour details.

---

### 2. Labour Hours / Time Calculation

**Question:**  
CPQ has predefined hours/units for certain resources. If additional hours are entered, the calculation is based on the predefined values plus the additional hours. Should the same business rule apply to Job Activity?

**Confirmed approach:**  
Yes.

For Job Activity:
- The initial calculation will be based on the **time added in the Service App against the diary actions**.
- If the timesheet is subsequently edited, the cost and sell price must be **recalculated based on the updated time/resources**.
- This includes both:
  - Adding hours/resources.
  - Removing hours/resources.
- At branch level, the calculation should simply be:

**Labour Cost / Sell Price = Time × Labour Rate**

The time comes from the Service App and any subsequent updates made through the Timesheet Edit feature in the Client Portal.

---

### 3. Truck Cost and Sell Price

**Question:**  
The truck-related amount is currently part of the overall Leg Cost, which includes other cost components in addition to the truck. We need to understand whether there is a specific truck rate available.

**Confirmed / Pending:**  
- For Job Activity, we should use a **single truck rate**.
- The truck calculation should be based on the **hours added in the Service App against the diary action**, including any updates made through the Timesheet Edit feature.
- The exact truck rate still needs to be confirmed with David.

**Pending clarification:**  
We should confirm whether any additional parameters are required for Truck Cost and Sell Price, such as:
- Predefined hours.
- Additional hours.
- Distance.
- Trip/leg-related costs.
- Any other applicable parameters.

---

### 4. CPQ vs Job Activity Calculation Logic

**Question:**  
Should Job Activity follow the same business rules as CPQ, or should it have separate calculation logic?

**Confirmed approach:**  
Job Activity should use a **simplified time × rate calculation** rather than directly reusing the full CPQ calculation engine.

For Labour:

**Cost / Sell Price = Time × Labour Rate**

For Truck:

**Cost / Sell Price = Time × Single Truck Rate**

The time should come from:
1. The Service App diary action.
2. Any subsequent Timesheet Edit performed through the Client Portal.

---

### 5. Items to Confirm

To ensure the requirement is implemented correctly, we should confirm the following:

| Area | Confirmed Requirement / Open Question |
|---|---|
| **Labour Rate** | Onsite: Foreman rate for supervisor and Standard rate for crew. Other categories: Standard labour rate only. |
| **Labour Time** | Use minutes/hours recorded in the Service App and any Timesheet Edit updates. |
| **Labour Recalculation** | Recalculate when hours or resources are added/removed through Timesheet Edit. |
| **Predefined Labour Hours** | Confirmed that the calculation needs to account for the applicable predefined hours/business rules. |
| **Truck Rate** | Use a single truck rate. Exact rate to be confirmed with David. |
| **Truck Time** | Use time recorded against the diary action in the Service App and any Timesheet Edit updates. |
| **Truck Parameters** | Confirm whether distance, predefined hours, additional hours, trip/leg costs, or other parameters need to be considered. |
| **CPQ Rules** | Job Activity should use a simplified calculation rather than directly depending on the complete CPQ calculation engine. |
| **Branch-Level Calculation** | Time × applicable rate based on the branch. |

### Summary

The initial Job Activity calculation should be **time × rate**, using the time recorded in the Service App and incorporating any subsequent Timesheet Edit changes.

For Labour, the applicable rate depends on the diary category and labour role. For Truck, a **single truck rate** will be used, with the exact rate still to be confirmed with David.