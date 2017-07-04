# A Movie Site!
<h2>Movie site project using:</h2>
<ul>
<li>AngularJS</li>
<li>AJAX and <a href="https://www.themoviedb.org/" target="#">the Movie Database API</a></li>
<li>CSS Grid</li>
<li>A further attempt at a "flat" design style</li>
<li>Love</li>
</ul>
<hr>
<ul>
<li><h2>AJAX and the Movie Database API</h2>
<p>I personally found the documentation for the API a bit confusing, but fortunately, there is a subsection of the website that allows you to generate the link you would like to use with you AJAX request, which made the process of finding the info I wanted and setting up the AJAX request a lot easier.</p>
<p>For example, I wanted to update my site to reference the movies that were "Now Playing" rather than use the "Discover" feature, which seems to be the basis for much of the documentation. This took a surprising amount of research, but ultimately <a href='https://developers.themoviedb.org/3/movies/get-now-playing'>this page</a> got me to where I wanted to go.</p></li>
<li><h2>CSS Grid</h2>
<p>Since I first heard about CSS Grid, I have been intrigued. Of course, there are many "grid layout" systems, and I myself learned about Foundation by Zurb at TIY. However, there was a part of me that felt that these systems were overkill for the types of sites that I was developing. I can certainly see their value, but felt they were unneccesarily bloating my code. I have been tinkering with layouts using the newly-minted CSS Grid so thought it would be a fun experiment to use them in a project.</p>
<p>It may be awhile before they go into real production, but I like how simple they are to setup and that they help me to avoid the mess that things like Foundation can make of your HTML. It keeps layout confined to CSS, which <em>feels</em> more natural to me.</p>
<p>In any case, I opted to lay out the movies in 3 columns (a change from my inital layout of 2). This immediately presented an issue in that the API returns pages of 20 items. Now I had 6 even rows of three items and 1 row stranded at the bottom with only two items; needless to say, it didn't look right.</p>
<p>Now, I could have simply loaded another page from the API and used only one movie from the second page, thus keeping my layout consistent, but at the moment, I think it might be kind of a neat experiment to see if I can fix a layout issue in a dynamic environment, or at least find a suitable workaround. We shall see...</p></li>
<li><h2>Design</h2>
<p>Design is not exactly my wheelhouse, but as with many things in life, I feel some guidelines can be useful when approaching a project. I'm paraphrasing of course, but I once read in an interview with Jack White that imposing limitations upon ourselves gives us freedom in that it gives us a box to work in. Without that box, we can feel lost in a desert of potential ideas, which can often result in a type of "analysis paralysis" or "blank page syndrome", at least for me.</p>
<p>So while I probably can't learn to be an amazing designer in a few hours, I can try to teach myself some basics so that I don't get hung up on design things while creating projects for myself. One style that I've noted is a "flat" design that was popular the last few years, which seems to be characterized by a lack of dimension, bold, "flat" colors, and an emphasis on typography. It's certainly not something I've mastered, but it's a direction to move in and it keeps me from getting too hung up on design details that aren't necessarily the "point" of the project. I hope to learn more over time. One of my "medium-range" goals is to have some full-stack facility as well as an awareness of design, so that I can be somewhat self-sufficient when it comes to web design. No man is an island, but I'd like to be able to play one convincingly in case I need to pretend for awhile.</p></li>
<li><ul><h2>Planned updates: </h2>
<li>Some sort of background feature to break it up</li>
<li>A footer with some info</li>
<li>Some transition effects to make the scrolling nicer</li>
</ul>
</li>
</ul>