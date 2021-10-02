<<<<<<< HEAD
## Blog Template


### Visit
https://community.blog.mentro.tech

## To run locally:

(make sure you have the dependencies installed, like Ruby, bundle etc.)

1. fork the repository
2. git clone https://github.com/<GITHUB_USERNAME>/Mentro-Community-Blog.git
3. cd mentro-community-blog
4. bundle exec jekyll serve
5. go to the link _http://127.0.0.1:4000/_ in your browser

## how to Commit

1. git add .
2. git commit -m "Comment"


## Editting

### Adding Authors

- update authors section of `_config.yml` 
- Put the following required info under an author_id(anything of your choice): 
  - name - name of author.
  - site - some site if the author has some.
  - avatar - relative an image from the assets/images directory.
  - bio - A short bio.
  - email - A contact email specific to the author
  - linkedin - linkedin account url
  - twitter - twitter account url
**Sample**
```
  mentro:
    name: "Team Mentro" # Author ID
    site: "https://mentro.tech"
    avatar: "/assets/images/mentro_logo.png"
    bio: "Official account for Mentro"
    email: "contact@mentro.tech"
    linkedin: https://www.linkedin.com/company/mentro-official
```
- add a `<authorID>.md` page in _authors folder with the following: 
  - author: mentro # Author ID
  - permalink: /author/debayan/ # `/author/<AuthorID>`
- Remember Restarting the Server After Updating the Config

### Adding Posts

- Create a md file in the format `<yyyy-mm-dd-your-unique-postname>.md` in the _posts folder
- write your blog in markdown, might contain any of the markdown features like lists, urls, embedded images, etc
- Add the following metadata:
``` 
---- 
  title:  "Title of Your Post"
  description:  "Description of your post"
  category: leetcode # category can be one of **backend**, **frontend**, **dsa**, **leetcode**
  image: /assets/images/image.jpg # image url of your post
  keywords: # Keywords your want to ad for SEO
    - Mentor 
    - Mentro
    - Mentorship
  author: authorId 
  permalink: /leetcode/:title/ # /<category>/:title/
  tags: # Tags if you want some like `dp`, `tree`, `js`, `django`
    - tree
    - python
----
```
- Visit [here](/Help/2021-08-18-find-a-mentor-today-b1.md) to see sample markdown



### Adding/Removing images

- add images to the /assets/images folder if you want to add some

## Understanding the File Structure

### \_includes

This mostly contains files which are related to UI.

### \_layouts

1. author.html - This is the layout for author pages. This affects pages in **\_authors**.
2. category.html - This is the layout for category pages. This affects pages in **\_categories**
3. default.html - This is the layout loaded by all pages It contains the Navbar and the basic structure of the web pages
4. page.html - This is the layout for the contents of **\_pages** folder. Each page mentioned here holds the details of each author and their post history
5. page-sidebar.html - This is the layout for the sidebar used in many pages.
6. post.html - This is the layout the **\_posts** in the blog.

### \_pages


1. contact.md - It is the contacts page
2. privacy-policy.md - These are the Privacy Policies
3. tags.html - These are tags to each blogs

### \_site

This folder is constantly updated and consists of the compiled version of HTML CSS and other Resources. 
**Warning: Don't edit contents of the folder.**

### assets

This folder consists of assets such as css, images and js

### \_config.yml

This is a config file. **Any changes in this file needs a restart to the server to get reflected** in the website.
This consists of some site variables like links to (logos, baseurl, sitename etc) and author info

### index.html

This is the home page of the repository
=======
## Blog Template


### Visit
https://community.blog.mentro.tech

## To run locally:

(make sure you have the dependencies installed, like Ruby, bundle etc.)

1. fork the repository
2. git clone https://github.com/<GITHUB_USERNAME>/Mentro-Community-Blog.git
3. cd mentro-community-blog
4. bundle exec jekyll serve
5. go to the link _http://127.0.0.1:4000/_ in your browser

## how to Commit

1. git add .
2. git commit -m "Comment"


## Editting

### Adding Authors

- update authors section of `_config.yml` 
- Put the following required info under an author_id(anything of your choice): 
  - name - name of author.
  - site - some site if the author has some.
  - avatar - relative an image from the assets/images directory.
  - bio - A short bio.
  - email - A contact email specific to the author
  - linkedin - linkedin account url
  - twitter - twitter account url
**Sample**
```
  mentro:
    name: "Team Mentro" # Author ID
    site: "https://mentro.tech"
    avatar: "/assets/images/mentro_logo.png"
    bio: "Official account for Mentro"
    email: "contact@mentro.tech"
    linkedin: https://www.linkedin.com/company/mentro-official
```
- add a `<authorID>.md` page in _authors folder with the following: 
  - author: mentro # Author ID
  - permalink: /author/debayan/ # `/author/<AuthorID>`
- Remember Restarting the Server After Updating the Config

### Adding Posts

- Create a md file in the format `<yyyy-mm-dd-your-unique-postname>.md` in the _posts folder
- write your blog in markdown, might contain any of the markdown features like lists, urls, embedded images, etc
- Add the following metadata:
``` 
---- 
  title:  "Title of Your Post"
  description:  "Description of your post"
  category: leetcode # category can be one of **backend**, **frontend**, **dsa**, **leetcode**
  image: /assets/images/image.jpg # image url of your post
  keywords: # Keywords your want to ad for SEO
    - Mentor 
    - Mentro
    - Mentorship
  author: authorId 
  permalink: /leetcode/:title/ # /<category>/:title/
  tags: # Tags if you want some like `dp`, `tree`, `js`, `django`
    - tree
    - python
----
```
- Visit [here](/Help/2021-08-18-find-a-mentor-today-b1.md) to see sample markdown



### Adding/Removing images

- add images to the /assets/images folder if you want to add some

## Understanding the File Structure

### \_includes

This mostly contains files which are related to UI.

### \_layouts

1. author.html - This is the layout for author pages. This affects pages in **\_authors**.
2. category.html - This is the layout for category pages. This affects pages in **\_categories**
3. default.html - This is the layout loaded by all pages It contains the Navbar and the basic structure of the web pages
4. page.html - This is the layout for the contents of **\_pages** folder. Each page mentioned here holds the details of each author and their post history
5. page-sidebar.html - This is the layout for the sidebar used in many pages.
6. post.html - This is the layout the **\_posts** in the blog.

### \_pages


1. contact.md - It is the contacts page
2. privacy-policy.md - These are the Privacy Policies
3. tags.html - These are tags to each blogs

### \_site

This folder is constantly updated and consists of the compiled version of HTML CSS and other Resources. 
**Warning: Don't edit contents of the folder.**

### assets

This folder consists of assets such as css, images and js

### \_config.yml

This is a config file. **Any changes in this file needs a restart to the server to get reflected** in the website.
This consists of some site variables like links to (logos, baseurl, sitename etc) and author info

### index.html

This is the home page of the repository
>>>>>>> resolved merge conflicts
