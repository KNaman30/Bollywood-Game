#include<stdio.h>
#include<stdlib.h>
#include<conio.h>
#include<windows.h>
void gotoxy(int x,int y)
{
COORD V={x, y};
SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), V);
}
int main()
{
	char film[100],dfilm[100],ch;
	int i,t=20,found;
	printf("Enter the name of film:");
	i=-1;
	do
	{
		film[++i]=getch();
		dfilm[i]=(film[i]==' '?' ':'-'); // set corresponding characters in duplicate string
		
	}
	while(film[i]!=13); // '\r' = 13 ENTER/RTETURN Key
	film[i]=dfilm[i]=NULL;  // '\0' = NULL = 0
	 
while(t!=-1)
	 {
	 system("cls"); 
	gotoxy(30,10);
	printf("%s",dfilm);
	gotoxy(20,15);
	printf("Guess Character (%d chance remainig):",t);
	ch=getche();
	found=0; //let the character is not present in film
	for(i=0;i<strlen(film);i++)
	  if(ch==film[i])
	   {
	    dfilm[i]=ch;
	    found=1;  //character is present is film
	   }
	   
	
	if(found==0) //wrong guess i.e. character is not present in film
	{
		
		if(t==0) //if chances becomes 0 then user lost the game
		{
			printf("\nYOU LOSE, film is %s",film);
			exit(0);
		}
	}
	else //if guess is right	
	{
	   if(strcmp(film,dfilm)==0) // all characters are resolved
	   {
	   	gotoxy(30,10);
	    printf("%s",dfilm);
        gotoxy(60,20);	
	   	printf("YOU WIN");
	   	exit(0);
	   }
	}
	t--;
}// end infinite while
return 0;
}


