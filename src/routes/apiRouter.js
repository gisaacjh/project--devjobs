const Router = require('express').Router;

const apiRouter = Router();

apiRouter
  .get('/', (req, res) => {
    res.json({
      'routes': {
        '/api/users': 'Show the users',
        '/api/tweets': 'Show the tweets'
      }
    });
  });

apiRouter
  .get('/tweets', (req, res) => {
    res.json([{
      "contributors": null,
      "coordinates": null,
      "created_at": "Tue Aug 23 13:53:11 +0000 2016",
      "entities": {
          "hashtags": [],
          "symbols": [],
          "urls": [],
          "user_mentions": []
      },
      "favorite_count": 6682,
      "favorited": false,
      "geo": null,
      "id": 768083669550366720,
      "id_str": "768083669550366720",
      "in_reply_to_screen_name": null,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "is_quote_status": false,
      "lang": "en",
      "place": null,
      "retweet_count": 2301,
      "retweeted": false,
      "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
      "text": "It is being reported by virtually everyone, and is a fact,  that the media pile on against me is the worst in American political history!",
      "truncated": false,
      "user": {
          "contributors_enabled": false,
          "created_at": "Wed Mar 18 13:46:38 +0000 2009",
          "default_profile": false,
          "default_profile_image": false,
          "description": "#TrumpPence16",
          "entities": {
              "description": {
                  "urls": []
              },
              "url": {
                  "urls": [
                      {
                          "display_url": "DonaldJTrump.com",
                          "expanded_url": "http://www.DonaldJTrump.com",
                          "indices": [
                              0,
                              23
                          ],
                          "url": "https://t.co/mZB2hymxC9"
                      }
                  ]
              }
          },
          "favourites_count": 35,
          "follow_request_sent": false,
          "followers_count": 11088848,
          "following": true,
          "friends_count": 42,
          "geo_enabled": true,
          "has_extended_profile": false,
          "id": 25073877,
          "id_str": "25073877",
          "is_translation_enabled": true,
          "is_translator": false,
          "lang": "en",
          "listed_count": 37760,
          "location": "New York, NY",
          "name": "Donald J. Trump",
          "notifications": false,
          "profile_background_color": "6D5C18",
          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
          "profile_background_tile": true,
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1468988952",
          "profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
          "profile_link_color": "0D5B73",
          "profile_sidebar_border_color": "BDDCAD",
          "profile_sidebar_fill_color": "C5CEC0",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "protected": false,
          "screen_name": "realDonaldTrump",
          "statuses_count": 32980,
          "time_zone": "Eastern Time (US & Canada)",
          "url": "https://t.co/mZB2hymxC9",
          "utc_offset": -14400,
          "verified": true
      }
    }, {
      "contributors": null,
      "coordinates": null,
      "created_at": "Tue Aug 23 12:56:46 +0000 2016",
      "entities": {
          "hashtags": [],
          "symbols": [],
          "urls": [],
          "user_mentions": [
              {
                  "id": 1367531,
                  "id_str": "1367531",
                  "indices": [
                      72,
                      80
                  ],
                  "name": "Fox News",
                  "screen_name": "FoxNews"
              }
          ]
      },
      "favorite_count": 7826,
      "favorited": false,
      "geo": null,
      "id": 768069472464666624,
      "id_str": "768069472464666624",
      "in_reply_to_screen_name": null,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "is_quote_status": false,
      "lang": "en",
      "place": null,
      "retweet_count": 2547,
      "retweeted": false,
      "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
      "text": "I am now in Texas doing a big fundraiser for the Republican Party and a @FoxNews Special on the BORDER and with victims of border crime!",
      "truncated": false,
      "user": {
          "contributors_enabled": false,
          "created_at": "Wed Mar 18 13:46:38 +0000 2009",
          "default_profile": false,
          "default_profile_image": false,
          "description": "#TrumpPence16",
          "entities": {
              "description": {
                  "urls": []
              },
              "url": {
                  "urls": [
                      {
                          "display_url": "DonaldJTrump.com",
                          "expanded_url": "http://www.DonaldJTrump.com",
                          "indices": [
                              0,
                              23
                          ],
                          "url": "https://t.co/mZB2hymxC9"
                      }
                  ]
              }
          },
          "favourites_count": 35,
          "follow_request_sent": false,
          "followers_count": 11088848,
          "following": true,
          "friends_count": 42,
          "geo_enabled": true,
          "has_extended_profile": false,
          "id": 25073877,
          "id_str": "25073877",
          "is_translation_enabled": true,
          "is_translator": false,
          "lang": "en",
          "listed_count": 37760,
          "location": "New York, NY",
          "name": "Donald J. Trump",
          "notifications": false,
          "profile_background_color": "6D5C18",
          "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
          "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/530021613/trump_scotland__43_of_70_cc.jpg",
          "profile_background_tile": true,
          "profile_banner_url": "https://pbs.twimg.com/profile_banners/25073877/1468988952",
          "profile_image_url": "http://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
          "profile_image_url_https": "https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_normal.jpg",
          "profile_link_color": "0D5B73",
          "profile_sidebar_border_color": "BDDCAD",
          "profile_sidebar_fill_color": "C5CEC0",
          "profile_text_color": "333333",
          "profile_use_background_image": true,
          "protected": false,
          "screen_name": "realDonaldTrump",
          "statuses_count": 32980,
          "time_zone": "Eastern Time (US & Canada)",
          "url": "https://t.co/mZB2hymxC9",
          "utc_offset": -14400,
          "verified": true
      }
    }])
  })

module.exports = apiRouter;
