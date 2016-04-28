function isPalindrome(string) 
{
  
  var regExp = /[ ]/ig
	
  if (string.search(regExp) == -1)

	  if(string.length <= 1)
	  	return true

	  if(string.charAt(0) == string.charAt(string.length - 1))
	  	return true

	  return false
}
/////////////////
function isPalindrome(string) 
{
  
	if(string.length <= 1)
	  return true

	if(string.charAt(0) != string.charAt(string.length - 1))
	  return false

	return isPalindrome(string.substr(1, string.length - 2))
}