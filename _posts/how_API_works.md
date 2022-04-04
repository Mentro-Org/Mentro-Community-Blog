The Blogger API enables you to integrate Blogger content with your application by using the REST APIs. Before you begin, you will need to set up authorization.

Introduction:
This document is intended for developers who want to write applications that can interact with the Blogger API. Blogger is a tool for creating websites that allow people to publish their thoughts on an ongoing basis.

If you're unfamiliar with Blogger concepts, you should read Getting Started before starting to code.

Authorizing requests and identifying your application
Every request your application sends to the Blogger APIs needs to identify your application to Google. There are two ways to identify your application: using an OAuth 2.0 token (which also authorizes the request) and/or using the application's API key. Here's how to determine which of those options to use:

If the request requires authorization (such as a request for an individual's private data), then the application must provide an OAuth 2.0 token with the request. The application may also provide the API key, but it doesn't have to.
If the request doesn't require authorization (such as a request for public data), then the application must provide either the API key or an OAuth 2.0 token, or both—whatever option is most convenient for you.
About authorization protocols
Your application must use OAuth 2.0 to authorize requests. No other authorization protocols are supported. If your application uses Google Sign-In, some aspects of authorization are handled for you.

Authorizing requests with OAuth 2.0
Requests to the Blogger APIs for non-public user data must be authorized by an authenticated user.

This process is facilitated with an OAuth client ID.

Get an OAuth client ID
Or create one in the Credentials page.

The details of the authorization process, or "flow," for OAuth 2.0 vary somewhat depending on what kind of application you're writing. The following general process applies to all application types:

When your application needs access to user data, it asks Google for a particular scope of access.
Google displays a consent screen to the user, asking them to authorize your application to request some of their data.
If the user approves, then Google gives your application a short-lived access token.
Your application requests user data, attaching the access token to the request.
If Google determines that your request and the token are valid, it returns the requested data.
Some flows include additional steps, such as using refresh tokens to acquire new access tokens. For detailed information about flows for various types of applications, see Google's OAuth 2.0 documentation.

Here's the OAuth 2.0 scope information for the Blogger APIs:


https://www.googleapis.com/auth/blogger
To request access using OAuth 2.0, your application needs the scope information, as well as information that Google supplies when you register your application (such as the client ID and the client secret).

Tip: The Google APIs client libraries can handle some of the authorization process for you. They are available for a variety of programming languages; check the page with libraries and samples for more details.

Acquiring and using an API key 
Requests to the Blogger APIs for public data must be accompanied by an identifier, which can be an API key or an access token.

Get a Key
Or create one in the Credentials page.

After you have an API key, your application can append the query parameter key=yourAPIKey to all request URLs.

The API key is safe for embedding in URLs; it doesn't need any encoding.

Working with blogs
Retrieving a blog
You can retrieve information for a particular blog by sending an HTTP GET request to the blog's URI. The URI for a blog has the following format:


https://www.googleapis.com/blogger/v3/blogs/blogId
Request

GET https://www.googleapis.com/blogger/v3/blogs/2399953?key=YOUR-API-KEY
A user does not need to be authenticated to retrieve a public blog. The application does not need to include Authorization HTTP header for a public blog request; however, you do need to provide the API key.

Blogger also has private blogs, which require authentication.

Response
If the request succeeds, the server responds with an HTTP 200 OK status code and the blog data:


{
  "kind": "blogger#blog",
  "id": "2399953",
  "name": "Blogger Buzz",
  "description": "The Official Buzz from Blogger at Google",
  "published": "2007-04-23T22:17:29.261Z",
  "updated": "2011-08-02T06:01:15.941Z",
  "url": "http://buzz.blogger.com/",
  "selfLink": "https://www.googleapis.com/blogger/v3/blogs/2399953",
  "posts": {
    "totalItems": 494,
    "selfLink": "https://www.googleapis.com/blogger/v3/blogs/2399953/posts"
  },
  "pages": {
    "totalItems": 2,
    "selfLink": "https://www.googleapis.com/blogger/v3/blogs/2399953/pages"
  },
  "locale": {
    "language": "en",
    "country": "",
    "variant": ""
  }
}
Retrieving a blog by its URL
You can retrieve a blog using its URL by sending an HTTP GET request to the following URI with a url parameter:


https://www.googleapis.com/blogger/v3/blogs/byurl?url=blog-url
Request

https://www.googleapis.com/blogger/v3/blogs/byurl?url=http://code.blogger.com/
Response
If the request succeeds, the server responds with an HTTP 200 OK status code and the full representation of the identified blog:


{
 "kind": "blogger#blog",
 "id": "3213900",
 "name": "Blogger Developers Network",
 "description": "The official Blogger Developers Network weblog.",
 "published": "2007-02-09T10:13:10-08:00",
 "updated": "2012-04-15T19:38:01-07:00",
 "url": "http://code.blogger.com/",
 "selfLink": "https://www.googleapis.com/blogger/v3/blogs/3213900",
 "posts": {
  "totalItems": 55,
  "selfLink": "https://www.googleapis.com/blogger/v3/blogs/3213900/posts"
 },
 "pages": {
  "totalItems": 1,
  "selfLink": "https://www.googleapis.com/blogger/v3/blogs/3213900/pages"
 },
 "locale": {
  "language": "en",
  "country": "US",
  "variant": ""
 }
}
Retrieving a user's blogs
You can retrieve a list of a user's blogs by sending an HTTP GET request to the blogs collection URI:


https://www.googleapis.com/blogger/v3/users/userId/blogs
Request

GET https://www.googleapis.com/blogger/v3/users/self/blogs
Authorization: /* OAuth 2.0 token here */
Note: The user must be authenticated to list their own blogs, so you must provide the Authorization HTTP header with the GET request.

Response
If the request succeeds, the server responds with an HTTP 200 OK status code and the full representation of the list of the user's blogs:


{
  "kind": "blogger#blogList",
  "items": [
    {
      "kind": "blogger#blog",
      "id": "4967929378133675647",
      "name": "Brett's Test Blawg",
      "description": "",
      "published": "2010-10-06T23:33:31.662Z",
      "updated": "2011-08-08T06:50:02.005Z",
      "url": "http://brettmorgan-test-blawg.blogspot.com/",
      "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4967929378133675647",
      "posts": {
        "totalItems": 13,
        "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4967929378133675647/posts"
      },
      "pages": {
        "totalItems": 1,
        "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4967929378133675647/pages"
      },
      "locale": {
        "language": "en",
        "country": "",
        "variant": ""
      }
    }
  ]
}
Working with posts
Retrieving posts from a blog
You can retrieve a list of posts from a given blog by sending a GET request to the posts collection URI. The URI for a posts collection has the following format:


https://www.googleapis.com/blogger/v3/blogs/blogId/posts
Request
Here is an example:


GET https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=YOUR-API-KEY
A user does not need to be authenticated to retrieve a public blog. The application does not need to include Authorization HTTP header for a public blog request; however, you do need to provide the API key.

Blogger also has private blogs, which require authentication.

Response
If the request succeeds, the server responds with an HTTP 200 OK status code and the list of posts:


{
  "kind": "blogger#postList",
  "nextPageToken": "CgkIChiAkceVjiYQ0b2SAQ",
  "prevPageToken": "CgkIChDBwrK3mCYQ0b2SAQ",
  "items": [
    {
      "kind": "blogger#post",
      "id": "7706273476706534553",
      "blog": {
        "id": "2399953"
      },
      "published": "2011-08-01T19:58:00.000Z",
      "updated": "2011-08-01T19:58:51.947Z",
      "url": "http://buzz.blogger.com/2011/08/latest-updates-august-1st.html",
      "selfLink": "https://www.googleapis.com/blogger/v3/blogs/2399953/posts/7706273476706534553",
      "title": "Latest updates, August 1st",
      "content": "elided for readability",
      "author": {
        "id": "401465483996",
        "displayName": "Brett Wiltshire",
        "url": "http://www.blogger.com/profile/01430672582309320414",
        "image": {
          "url": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
         }
      },
      "replies": {
        "totalItems": "0",
        "selfLink": "https://www.googleapis.com/blogger/v3/blogs/2399953/posts/7706273476706534553/comments"
      }
    },
    {
      "kind": "blogger#post",
      "id": "6069922188027612413",
      elided for readability
    }
  ]
}
Retrieving a specific post
You can retrieve a specific post from a blog by sending a GET request to the posts resource URI. The URI for a posts resource has the following format:


https://www.googleapis.com/blogger/v3/blogs/blogId/posts/postId
Request

GET https://www.googleapis.com/blogger/v3/blogs/2399953/posts/7706273476706534553?key=YOUR-API-KEY
A user does not need to be authenticated to retrieve a public blog. The application does not need to include Authorization HTTP header for a public blog request; however, you do need to provide the API key.

Blogger also has private blogs, which require authentication.

Response
If the request succeeds, the server responds with an HTTP 200 OK status code and the contents of the post:


{
  "kind": "blogger#post",
  "id": "7706273476706534553",
  "blog": {
    "id": "2399953"
  },
  "published": "2011-08-01T19:58:00.000Z",
  "updated": "2011-08-01T19:58:51.947Z",
  "url": "http://buzz.blogger.com/2011/08/latest-updates-august-1st.html",
  "selfLink": "https://www.googleapis.com/blogger/v3/blogs/2399953/posts/7706273476706534553",
  "title": "Latest updates, August 1st",
  "content": "elided for readability",
  "author": {
    "id": "401465483996",
    "displayName": "Brett Wiltshire",
    "url": "http://www.blogger.com/profile/01430672582309320414",
    "image": {
      "url": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    }
  },
  "replies": {
    "totalItems": "0",
    "selfLink": "https://www.googleapis.com/blogger/v3/blogs/2399953/posts/7706273476706534553/comments"
  }
}
Searching for a post
You can search for posts from a blog by sending a GET request to the post search URI with the q search query parameter:


https://www.googleapis.com/blogger/v3/blogs/blogId/posts/search?q=query terms
Request

GET https://www.googleapis.com/blogger/v3/blogs/3213900/posts/search?q=documentation&key=YOUR-API-KEY
A user does not need to be authenticated to retrieve a public blog. The application does not need to include Authorization HTTP header for a public blog request; however, you do need to provide the API key.

Blogger also has private blogs, which require authentication.

Response
If the request succeeds, the server responds with an HTTP 200 OK status code and the contents of the post:


{
  "kind": "blogger#postList",
  "nextPageToken": "CgkIChiAj86CpB8QzJTEAQ",
  "prevPageToken": "CgkIChDBq5v24yYQzJTEAQ",
  "items": [
  {
    "kind": "blogger#post",
    "id": "1387873546480002228",
    "blog": {
      "id": "3213900"
    },
    "published": "2012-03-23T01:58:00-07:00",
    "updated": "2012-03-23T01:58:12-07:00",
    "url": "http://code.blogger.com/2012/03/blogger-documentation-has-moved-to.html",
    "selfLink": "https://www.googleapis.com/blogger/v3/blogs/3213900/posts/1387873546480002228",
    "title": "Blogger Documentation has moved to developers.google.com",
    "content": "content elided for readability",
    "author": {
      "id": "16258312240222542576",
      "displayName": "Brett Morgan",
      "url": "http://www.blogger.com/profile/16258312240222542576",
      "image": {
        "url": "https://resources.blogblog.com/img/b16-rounded.gif"
      }
    },
    "replies": {
      "totalItems": "0",
      "selfLink": "https://www.googleapis.com/blogger/v3/blogs/3213900/posts/1387873546480002228/comments"
    }
  },
  ...
  ]
}
Adding a post
You can add a post for a blog by sending a POST request to the post collection URI with a post JSON body:


https://www.googleapis.com/blogger/v3/blogs/blogId/posts/
Request

POST https://www.googleapis.com/blogger/v3/blogs/8070105920543249955/posts/
Authorization: /* OAuth 2.0 token here */
Content-Type: application/json

{
  "kind": "blogger#post",
  "blog": {
    "id": "8070105920543249955"
  },
  "title": "A new post",
  "content": "With <b>exciting</b> content..."
}
You must be authenticated to create a post.

Response
If the request succeeds, the server responds with an HTTP 200 OK status code and the contents of the post:


{
 "kind": "blogger#post",
 "id": "6819100329896798058",
 "blog": {
  "id": "8070105920543249955"
 },
 "published": "2012-05-20T20:08:00-07:00",
 "updated": "2012-05-20T20:08:35-07:00",
 "url": "http://brettmorgan-test2.blogspot.com/2012/05/new-post.html",
 "selfLink": "https://www.googleapis.com/blogger/v3/blogs/8070105920543249955/posts/6819100329896798058",
 "title": "A new post",
 "content": "With <b>exciting</b> content...",
 "author": {
  "id": "16258312240222542576",
  "displayName": "Brett Morgan",
  "url": "http://www.blogger.com/profile/16258312240222542576",
  "image": {
   "url": "https://resources.blogblog.com/img/b16-rounded.gif"
  }
 },
 "replies": {
  "totalItems": "0",
  "selfLink": "https://www.googleapis.com/blogger/v3/blogs/8070105920543249955/posts/6819100329896798058/comments"
 }
}
Deleting a post
You can delete a post for a blog by sending a DELETE request to the post resource URI:


https://www.googleapis.com/blogger/v3/blogs/blogId/posts/postId
Request
Here is an example:


DELETE https://www.googleapis.com/blogger/v3/blogs/8070105920543249955/posts/6819100329896798058
Authorization: /* OAuth 2.0 token here */
You must be authenticated to delete a post.

Response
If the request succeeds, the server responds with an HTTP 200 OK status code.

Retrieving a post by its path
You can retrieve a post from a blog by sending a GET request to the posts bypath URI with a path parameter. The URI for a posts by path request has the following format:


https://www.googleapis.com/blogger/v3/blogs/blogId/posts/bypath?path=post-path
Request

https://www.googleapis.com/blogger/v3/blogs/2399953/posts/bypath?path=/2011/08/latest-updates-august-1st.html&key=YOUR-API-KEY
A user does not need to be authenticated to retrieve a public blog. The application does not need to include Authorization HTTP header for a public blog request; however, you do need to provide the API key.

Blogger also has private blogs, which require authentication.

Response
If the request succeeds, the server responds with an HTTP 200 OK status code and the contents of the post:


{
  "kind": "blogger#post",
  "id": "7706273476706534553",
  "blog": {
    "id": "2399953"
  },
  "published": "2011-08-01T19:58:00.000Z",
  "updated": "2011-08-01T19:58:51.947Z",
  "url": "http://buzz.blogger.com/2011/08/latest-updates-august-1st.html",
  "selfLink": "https://www.googleapis.com/blogger/v3/blogs/2399953/posts/7706273476706534553",
  "title": "Latest updates, August 1st",
  "content": "elided for readability",
  "author": {
    "id": "401465483996",
    "displayName": "Brett Wiltshire",
    "url": "http://www.blogger.com/profile/01430672582309320414",
    "image": {
      "url": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    }
  },
  "replies": {
    "totalItems": "0",
    "selfLink": "https://www.googleapis.com/blogger/v3/blogs/2399953/posts/7706273476706534553/comments"
  }
}
Updating a post
You can update a post for a blog by sending a PUT request to the post resource URI with a post JSON body:


https://www.googleapis.com/blogger/v3/blogs/blogId/posts/postId
Request

PUT https://www.googleapis.com/blogger/v3/blogs/8070105920543249955/posts/3445355871727114160
Authorization: /* OAuth 2.0 token here */
Content-Type: application/json

{
 "kind": "blogger#post",
 "id": "3445355871727114160",
 "blog": {
  "id": "8070105920543249955"
 },
 "url": "http://brettmorgan-test2.blogspot.com/2012/05/new-post_20.html",
 "selfLink": "https://www.googleapis.com/blogger/v3/blogs/8070105920543249955/posts/3445355871727114160",
 "title": "An updated post",
 "content": "With really <b>exciting</b> content..."
}
You must be authenticated to update a post.

Response
If the request succeeds, the server responds with an HTTP 200 OK status code and the contents of the post:


{
 "kind": "blogger#post",
 "id": "6819100329896798058",
 "blog": {
  "id": "8070105920543249955"
 },
 "published": "2012-05-20T20:08:00-07:00",
 "updated": "2012-05-20T20:08:35-07:00",
 "url": "http://brettmorgan-test2.blogspot.com/2012/05/new-post.html",
 "selfLink": "https://www.googleapis.com/blogger/v3/blogs/8070105920543249955/posts/6819100329896798058",
 "title": "An updated post",
 "content": "With really <b>exciting</b> content...",
 "author": {
  "id": "16258312240222542576",
  "displayName": "Brett Morgan",
  "url": "http://www.blogger.com/profile/16258312240222542576",
  "image": {
   "url": "https://resources.blogblog.com/img/b16-rounded.gif"
  }
 },
 "replies": {
  "totalItems": "0",
  "selfLink": "https://www.googleapis.com/blogger/v3/blogs/8070105920543249955/posts/6819100329896798058/comments"
 }
}
Updating A post with patch semantics
You can update a post with patch semantics by sending a PATCH request to the post resource URI with a post JSON body:


https://www.googleapis.com/blogger/v3/blogs/blogId/posts/postId
Request
Here is an example:


PATCH https://www.googleapis.com/blogger/v3/blogs/8070105920543249955/posts/3445355871727114160
Authorization: /* OAuth 2.0 token here */
Content-Type: application/json

{
 "content": "With absolutely <b>fabulous</b> content..."
}
You must be authenticated to update a post.

Response
If the request succeeds, the server responds with an HTTP 200 OK status code and the contents of the post:


{
 "kind": "blogger#post",
 "id": "6819100329896798058",
 "blog": {
  "id": "8070105920543249955"
 },
 "published": "2012-05-20T20:08:00-07:00",
 "updated": "2012-05-20T20:08:35-07:00",
 "url": "http://brettmorgan-test2.blogspot.com/2012/05/new-post.html",
 "selfLink": "https://www.googleapis.com/blogger/v3/blogs/8070105920543249955/posts/6819100329896798058",
 "title": "An updated post",
 "content": "With absolutely <b>fabulous</b> content...",
 "author": {
  "id": "16258312240222542576",
  "displayName": "Brett Morgan",
  "url": "http://www.blogger.com/profile/16258312240222542576",
  "image": {
   "url": "https://resources.blogblog.com/img/b16-rounded.gif"
  }
 },
 "replies": {
  "totalItems": "0",
  "selfLink": "https://www.googleapis.com/blogger/v3/blogs/8070105920543249955/posts/6819100329896798058/comments"
 }
}
Working with comments
Retrieving comments for a post
You can retrieve a list of comments for a post by sending a GET request to the comments collection URI. The URI for a comments collection has the following format:


https://www.googleapis.com/blogger/v3/blogs/blogId/posts/postId/comments
Request

GET https://www.googleapis.com/blogger/v3/blogs/2399953/posts/6069922188027612413/comments?key=YOUR-API-KEY
"A user does not need to be authenticated to retrieve a public blog. The application does not need to include Authorization HTTP header for a public blog request; however, you do need to provide the API key.

Blogger also has private blogs, which require authentication.

Response
If the request succeeds, the server responds with an HTTP 200 OK status code and the list of comments:


{
  "kind": "blogger#commentList",
  "nextPageToken": "CgkIFBDwjvDXlyYQ0b2SARj9mZe9n8KsnlQ",
  "prevPageToken": "CgkIFBisvMGRlyYQ0b2SARj9mZe9n8KsnlQ",
  "items": [
    {
       "kind": "blogger#comment",
       "id": "9200761938824362519",
       "post": {
         "id": "6069922188027612413"
       },
       "blog": {
         "id": "2399953"
       },
       "published": "2011-07-28T19:19:57.740Z",
       "updated": "2011-07-28T21:29:42.015Z",
       "selfLink": "https://www.googleapis.com/blogger/v3/blogs/2399953/posts/6069922188027612413/comments/9200761938824362519",
       "content": "elided",
       "author": {
         "id": "530579030283",
         "displayName": "elided",
         "url": "elided",
         "image": {
           "url": "elided"
         }
       }
    },
    {
      "kind": "blogger#comment",
      "id": "400101178920857170",
      elided for readability
    }
  ]
}
Retrieving a specific comment
You can retrieve a specific comment from a post by sending a GET request to the comments resource URI. The URI for a comments resource has the following format:


https://www.googleapis.com/blogger/v3/blogs/blogId/posts/postId/comments/commentId
Request

GET https://www.googleapis.com/blogger/v3/blogs/2399953/posts/6069922188027612413/comments/9200761938824362519?key=YOUR-API-KEY
"A user does not need to be authenticated to retrieve a public blog. The application does not need to include Authorization HTTP header for a public blog request; however, you do need to provide the API key.

Blogger also has private blogs, which require authentication.

Response
If the request succeeds, the server responds with an HTTP 200 OK status code and the comment data:


{
  "kind": "blogger#comment",
  "id": "9200761938824362519",
  "post": {
    "id": "6069922188027612413"
  },
  "blog": {
    "id": "2399953"
  },
  "published": "2011-07-28T19:19:57.740Z",
  "updated": "2011-07-28T21:29:42.015Z",
  "selfLink": "https://www.googleapis.com/blogger/v3/blogs/2399953/posts/6069922188027612413/comments/9200761938824362519",
  "content": "elided",
  "author": {
    "id": "530579030283",
    "displayName": "elided",
    "url": "elided",
    "image": {
      "url": "elided"
    }
  }
}
Working with pages
Retrieving pages for a blog
You can retrieve a list of pages for a blog by sending a GET request to the pages collection URI. The URI for a pages collection has the following format:


https://www.googleapis.com/blogger/v3/blogs/blogId/pages
Request

GET https://www.googleapis.com/blogger/v3/blogs/4967929378133675647/pages?key=YOUR-API-KEY
"A user does not need to be authenticated to retrieve a public blog. The application does not need to include Authorization HTTP header for a public blog request; however, you do need to provide the API key.

Blogger also has private blogs, which require authentication.

Response
If the request succeeds, the server responds with an HTTP 200 OK status code and the list of pages:


{
  "kind": "blogger#pageList",
  "items": [
    {
      "kind": "blogger#page",
      "id": "273541696466681878",
      "blog": {
        "id": "4967929378133675647"
      },
      "published": "2011-07-14T16:16:00.000Z",
      "updated": "2011-07-14T16:16:23.602Z",
      "url": "http://brettmorgan-test-blawg.blogspot.com/p/static-content.html",
      "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4967929378133675647/pages/273541696466681878",
      "title": "Static Content",
      "content": "elided for readability",
      "author": {
        "id": "901569848744",
        "displayName": "brett",
        "url": "http://www.blogger.com/profile/16258312240222542576",
        "image": {
          "url": "https://resources.blogblog.com/img/b16-rounded.gif"
        }
      }
    }
  ]
}
Retrieving a specific page
You can retrieve a specific page from a blog by sending a GET request to the pages resource URI. The URI for a pages Resource has the following format:


https://www.googleapis.com/blogger/v3/blogs/blogId/pages/pageId
Request

GET https://www.googleapis.com/blogger/v3/blogs/4967929378133675647/pages/273541696466681878?key=YOUR-API-KEY
"A user does not need to be authenticated to retrieve a public blog. The application does not need to include Authorization HTTP header for a public blog request; however, you do need to provide the API key.

Blogger also has private blogs, which require authentication.

Response
If the request succeeds, the server responds with an HTTP 200 OK status code and the page data:


{
  "kind": "blogger#page",
  "id": "273541696466681878",
  "blog": {
    "id": "4967929378133675647"
  },
  "published": "2011-07-14T16:16:00.000Z",
  "updated": "2011-07-14T16:16:23.602Z",
  "url": "http://brettmorgan-test-blawg.blogspot.com/p/static-content.html",
  "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4967929378133675647/pages/273541696466681878",
  "title": "Static Content",
  "content": "elided for readability",
  "author": {
    "id": "901569848744",
    "displayName": "brett",
    "url": "http://www.blogger.com/profile/16258312240222542576",
    "image": {
      "url": "https://resources.blogblog.com/img/b16-rounded.gif"
    }
  }
}
Working with users
Retrieving a user
You can retrieve a user's information by sending an HTTP GET request to the users resource URI:


https://www.googleapis.com/blogger/v3/users/userId
Request

GET https://www.googleapis.com/blogger/v3/users/self
Authorization: /* OAuth 2.0 token here */
Note: The user must be authenticated to list their own information, so you must provide the Authorization HTTP header with the GET request.

Response
If the request succeeds, the server responds with an HTTP 200 OK status code and a link to a list of the user's blogs:


{
  "kind": "blogger#user",
  "id": "901569848744",
  "selfLink": "https://www.googleapis.com/blogger/v3/users/901569848744",
  "blogs": {
    "selfLink": "https://www.googleapis.com/blogger/v3/users/901569848744/blogs"
  }
}
