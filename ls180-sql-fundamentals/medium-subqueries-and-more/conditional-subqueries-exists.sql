SELECT name FROM bidders
WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);

-- Further Exploration

SELECT DISTINCT name FROM bidders
INNER JOIN bids ON bidder_id = bidders.id;