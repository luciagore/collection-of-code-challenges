package main

import "strings"

func main() {
	Accum("ZpglnRxqenU")
}

func Accum(stringToConvert string) string {
  newString := ""
	
  strings.ToLower(stringToConvert)
	
	for pos, char := range stringToConvert {	
		localString := strings.Repeat(string(char), pos + 1) + "-"
		newString += strings.ToTitle(localString)
	} 
  
	return newString
}


