INSERT INTO users ( user_name, password, profile_pic ) VALUES ( $1, $2, $3 );
SELECT * FROM users WHERE user_name = $1;