SELECT name,
       (SELECT COUNT(item_id) FROM bids WHERE item_id = items.id)
FROM items;

-- Further Exploration

SELECT name, count(bids.item_id) FROM items
LEFT JOIN bids ON bids.item_id = items.id
GROUP BY items.id
ORDER BY items.id;