/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed and ensures that
         * allFeeds has a URL defined and that the URL is not empty.
         */
        it('URL is defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            });
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Name is defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });
    });


    /* Test suite named "The menu" */
    describe('The menu', function() {


        /* A test that ensures the menu element is
         * hidden by default.
         */
        it('Menu is hidden by default', function() {
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('Menu works', function() {
            $('.menu-icon-link').click();
            expect(document.body.classList.contains('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
    });


    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(function(done) {
            loadFeed(0, function(){
                done();
            });
         });

         it('Asynchronous loadFeed loads feeds', function(done) {
            var container = $('.feed')[0]
            console.log(container)
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });


    /* A test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         var oldFeed, newFeed;

         beforeEach(function(done) {
            loadFeed(0, function(){
                oldFeed = $('.feed');
                loadFeed(1, function(done){
                    newFeed = $('.feed');
                    done();
                });
                done();
            });
         });

         it('Asynchronous loadFeed changes content', function(done) {
            expect(oldFeed).not.toBe(newFeed);
            done();
        });

        //  beforeEach(function() {
        //     $('.feed').empty( function(){
        //     });
        //  });

        //  it('Asynchronous loadFeed changes content', function(done) {
        //     expect($('.feed')[0]).not.toContainElement('.entry');
        //     loadFeed(0, function(done){
        //         expect($('.feed')[0]).toContainElement('.entry');
        //         done();
        //     });
        //     done();
        // });
    });
}());













