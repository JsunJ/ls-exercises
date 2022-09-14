SELECT MAX(virtual_table.count) FROM
  (SELECT DISTINCT bidder_id, COUNT(item_id) FROM bids
   GROUP BY bidder_id) AS virtual_table;

-- Alternative

SELECT MAX(bid_counts.count) FROM
  (SELECT COUNT(bidder_id) FROM bids GROUP BY bidder_id) AS bid_counts;

-- Alternative

SELECT COUNT(bidder_id) AS max_bid FROM bids
  GROUP BY bidder_id
  ORDER BY max_bid DESC
  LIMIT 1;