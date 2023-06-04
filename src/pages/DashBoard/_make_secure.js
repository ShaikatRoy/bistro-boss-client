/**
 * -----------------------
 *         BASIC
 * ------------------------
 * 1. do not show the link to them who should not see it 
 * 2. only show to the person/types of users who should see it 
 * 3. do not allow to visit the link by typing on the url
 * if not admin then redirect to any other page. you could logout user
 * and send them to the login page as well.
 * ---------------------------
 *       TO SEND DATA
 * ---------------------------
 * 1. verify jwt token (send authorization token in the header to the server).
 *     if possible use axios to send jet token by intercepting the request
 * 2. if it is an admin activity. Make sure only admin user is posting data
 *    by using verifyAdmin
 * 
 */