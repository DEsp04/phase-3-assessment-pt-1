-- #2 SQL Query: 
SELECT purch_amt, ord_date FROM orders
WHERE salesman_id = 5001;

-- #3 SQL Query:
SELECT salesman.name AS "Salesman", cust_name, customer.city FROM salesman, customer 
WHERE salesman.city = customer.city;