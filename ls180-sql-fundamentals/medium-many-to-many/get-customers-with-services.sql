SELECT DISTINCT customers.* FROM customers
INNER JOIN customers_services
        ON customer_id = customers.id;