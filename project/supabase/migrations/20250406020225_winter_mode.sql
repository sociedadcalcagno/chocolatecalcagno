/*
  # Fix Trufas Clásicas image URL

  1. Changes
    - Update the image URL for Trufas Clásicas product to a working image
*/

DO $$ 
BEGIN 
  UPDATE products 
  SET image_url = 'https://images.unsplash.com/photo-1582176604856-e824b4736522?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  WHERE name = 'Trufas Clásicas';
END $$;