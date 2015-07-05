# MN GIS/LIS Conference Attendees, by City

This repository contains [Minnesota GIS/LIS Consortium](http://www.mngislis.org) attendee numbers (excluding 2012). Data was compiled for all attendees, even if attendees did not attend the conference, but attended a pre-conference workshop. If attendees attended both a pre-conference workshop and the conference they were counted as one attendee. 

Due to database constraints, 2012 data is omitted below but may be added at a later time.

No private information is stored in the datasets and it was determined no person could be individually identified in showcasing attendees by city.


## About the Data
The geojson files contain three fields including:   
-  **`NumSum`**: The total number of attendees,   
-  **`City`**: The city indicated by the attendee while registering, and  
-  **`State`**: The state or country indicated by the attendee while registering .  


## The Data
Using the `NumSum` field each geojson files breaks down the number of attendees by city and state/country by the following compiled datasets:

1. **All Conference Attendees** *(allAttendees.json)*: A compilation all attendees from 2007-2011 and 2013-2014 in conferences based in Duluth, Rochester, and Saint Cloud. 2012 attendee records are not available. Attendees names have been removed and aggregated by city and state/country.  

2. **2007 Attendees** *(attendees2007.json)*: Conference attendees, compiled by city, that attended the annual conference Oct. 10th-12th, 2007 in Rochester, Minnesota.

3. **2008 Attendees** *(attendees2008.json)*: Conference attendees, compiled by city, that attended the annual conference Oct. 1st-3rd, 2008 in Rochester, Minnesota.

4. **2009 Attendees** *(attendees2009.json)*: Conference attendees, compiled by city, that attended the annual conference Oct. 21st-23rd, 2009 in Duluth, Minnesota.

5. **2010 Attendees** *(attendees2010.json)*: Conference attendees, compiled by city, that attended the annual conference Oct. 13th-15th, 2010 in Duluth, Minnesota.

6. **2011 Attendees** *(attendees2011.json)*: Conference attendees, compiled by city, that attended the annual conference Oct. 5th-7th, 2011 in Saint Cloud, Minnesota.

7. **2013 Attendees** *(attendees2013.json)*: Conference attendees, compiled by city, that attended the annual conference Oct. 9th-11th, 2013 in Rochester, Minnesota.

8. **2014 Attendees** *(attendees2014.json)*: Conference attendees, compiled by city, that attended the annual conference Oct. 1st-3rd, 2014 in Rochester, Minnesota.
  
## Coming Soon  
An interactive map displaying the attendee lists, by city.