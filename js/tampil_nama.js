function GetUrl()
{
    var sPageURL = window.location.search.substring(1);
    var res = sPageURL.toString();
    res = res.replace('%20',' ');
    var split = res.split('=')
    
    
    return split[1]

    }
 
document.getElementById("nama").innerHTML = GetUrl();
