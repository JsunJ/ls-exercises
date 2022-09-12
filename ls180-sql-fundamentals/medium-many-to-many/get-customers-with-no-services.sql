SELECT DISTINCT customers.* FROM customers
LEFT OUTER JOIN customers_services
             ON customer_id = customers.id
WHERE service_id IS NULL;

SELECT customers.*, services.* FROM customers
LEFT OUTER JOIN customers_services ON customer_id = customers.id
FULL OUTER JOIN services ON services.id = customers_services.service_id
WHERE customers.id IS NULL OR services.id IS NULL;