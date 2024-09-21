-- You will be given a table: "opposite", with a column: "number". Return a table with a column: "res".

SELECT 
 CASE 
  WHEN sign(number) = 1 
  THEN -number 
  ELSE abs(number) 
  END AS res
FROM opposite

-- Good solution
SELECT -number AS res
FROM opposite