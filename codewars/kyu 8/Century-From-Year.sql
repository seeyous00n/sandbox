-- Introduction
-- The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.--
SELECT FLOOR((yr + 99) / 100) AS century
FROM years;