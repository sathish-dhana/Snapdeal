function navbar() {
    return `<div id="navTop">
    <div>
        Brand Waali Quality, Bazaar Waali Deal!
    </div>
    <div>
        Deliveries to more than 2500 towns and cities and expanding.
    </div>
</div>
<div id="navBar">
    <div id="logo">
        <a href="Home.html"><img src="photos/logo1.png"></a>
    </div>
    <div id="search">
        <div id="pack">
            <input id="searchBox" placeholder="Search products & brands">
            <div id="button">
                <div>
                    <span class="fas fa-search"> </span>
                    Search
                </div>
            </div>
        </div>
    </div>
    <div id="rightNav">
        <div id="cartDiv">
            <div>
                Cart
                <span style="font-size: 18px;" class="fas fa-cart-plus"> </span>
            </div>
        </div>
        <div id="profileDiv">
            <div id="hovDiv">
                <span id="user">Profile&nbsp;</span>
                <span id="userIcon" style="font-size: 18px;" class="fa-solid fa-user"> </span>
            </div>
            
        </div>
    </div>
</div>`;

}
export default navbar;