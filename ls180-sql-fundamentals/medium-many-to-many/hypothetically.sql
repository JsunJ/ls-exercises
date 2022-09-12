SELECT SUM(services.price)
FROM services INNER JOIN customers_services
                      ON services.id = service_id
WHERE services.price > 100;

SELECT SUM(services.price)
FROM customers CROSS JOIN services
WHERE services.price > 100;