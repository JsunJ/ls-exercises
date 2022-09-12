SELECT services.description, COUNT(customers_services.customer_id)
FROM services INNER JOIN customers_services
                      ON services.id = service_id
GROUP BY description HAVING (COUNT(customers_services.customer_id) >= 3);