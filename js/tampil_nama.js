function GetUrl()
{
    var sPageURL = window.location.search.substring(1);
    var split = sPageURL.split('=')
    return split[1]

    }
 
document.getElementById("nama").innerHTML = GetUrl();