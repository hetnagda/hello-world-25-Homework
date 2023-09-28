import random

def instructions():
   print('\n')
   print('  _____________________ W E L C O M E  T O _______________________________ ')
   print('  __ __  ____   ___      ___  ____  __    __   ____  ______    ___  ____   ')  
   print(' |  |  ||    \ |   \    /  _]|    \|  |__|  | /    ||      |  /  _]|    \  ')  
   print(' |  |  ||  _  ||    \  /  [_ |  D  )  |  |  ||  o  ||      | /  [_ |  D  ) ')  
   print(' |  |  ||  |  ||  D  ||    _]|    /|  |  |  ||     ||_|  |_||    _]|    /  ')  
   print(' |  :  ||  |  ||     ||   [_ |    \|  `  `  ||  _  |  |  |  |   [_ |    \  ')  
   print(' |     ||  |  ||     ||     ||  .  \       / |  |  |  |  |  |     ||  .  \ ')  
   print('  \__,_||__|__||_____||_____||__|\_| \_/\_/  |__|__|  |__|  |_____||__|\_| ')  
   print('                                                                           ')                                                                           
   print('         ______  ____     ___   ____  _____ __ __  ____     ___            ')  
   print('        |      ||    \   /  _] /    |/ ___/|  |  ||    \   /  _]           ')  
   print(' _____  |      ||  D  ) /  [_ |  o  (   \_ |  |  ||  D  ) /  [_      _____ ')  
   print('|     | |_|  |_||    / |    _]|     |\__  ||  |  ||    / |    _]    |     |')  
   print('|_____|   |  |  |    \ |   [_ |  _  |/  \ ||  :  ||    \ |   [_     |_____|')  
   print('          |  |  |  .  \|     ||  |  |\    ||     ||  .  \|     |           ')  
   print('          |__|  |__|\_||_____||__|__| \___| \__,_||__|\_||_____|           ')
   print('\nDo not worry! You will not drown (yet! new features will be added soon!)')
   print('\n////// Your job is to find the TREASURE and get RICH! //////')
   print('\nDo not forget your friends (me) after you get RICH')
   print('\nLet us see how play this game\n')
   print(' ____   __ __  _        ___   _____')
   print('|    \ |  |  || |      /  _] / ___/')
   print('|  D  )|  |  || |     /  [_ (   \_ ')
   print('|    / |  |  || |___ |    _] \__  |')
   print('|    \ |  :  ||     ||   [_  /  \ |')
   print('|  .  \|     ||     ||     | \    |')
   print('|__|\_| \__,_||_____||_____|  \___|')
   print('\nThis is your sample map below')
   print(' --- --- --- ---')
   print('| X | X | X | X |')
   print(' ---+---+---+--- ')
   print('| X | X | X | X |')
   print(' ---+---+---+--- ')
   print('| X | △ | X | X |')
   print(' ---+---+---+--- ')
   print('| X |_X | X | X |')
   print(' --- --- --- ---')
   print('\n///// Important Notations /////\n')
   print('△ - Player Position')
   print('X - Unknown Position')
   print('M - Sea Monster')
   print('0 - Safe Position')
   print('\n*Important Note - There are no boundaries. If you are on the right edge and you go right, you will come back to the leftmosr edge')
   print('\nYou will be spawned at a random position on the map.')
   print('\nYou will 4 moves > Left, Right, Up, Down.')
   print('\nThe Treasure is hidden in one of the unknown locations. You need to try and find it!')
   print('\n///// But, BE CAREFUL! You are surrounded by SEA MONSTERS! /////')
   print('\nEach time you come in contact with the SEA MONSTER, you will lose 1 life!')
   print('\nBut luckily, You have 3 lives and you might also find more along the way!')
   print('  _   _         _   _         _   _   ')
   print('/   V   \     /   V   \     /   V   \ ')  
   print('|       |     |       |     |       | ')
   print(' \     /       \     /       \     /  ')
   print('   \ /           \ /           \ /    ')
   print('    *             *             *     ')
   print('\nThere is also a special move > *Look Around*. This will detect any near-by monsters and alert you.')
   print('\nBut remember! You can only use this once!\n')
   print('_____________________ L E T  U S  P L A Y _______________________________')
   input('\nPress Enter to continue > ')
   return

def chooseLevel():
    print('_________________ C H O O S E  Y O U R  L E V E L ______________________ ')
    print('   ___   ____  _____ __ __       ___   ____       ___    ____  _____  _____  ____   __  __ __  _     ______ ')
    print('  /  _] /    |/ ___/|  |  |     /   \ |    \     |   \  |    ||     ||     ||    | /  ]|  |  || |   |      |')
    print(' /  [_ |  o  (   \_ |  |  |    |     ||  D  )    |    \  |  | |   __||   __| |  | /  / |  |  || |   |      |')
    print('|    _]|     |\__  ||  ~  |    |  O  ||    /     |  D  | |  | |  |_  |  |_   |  |/  /  |  |  || |___|_|  |_|')
    print('|   [_ |  _  |/  \ ||___, |    |     ||    \     |     | |  | |   _] |   _]  |  /   \_ |  :  ||     | |  |  ')
    print('|     ||  |  |\    ||     |    |     ||  .  \    |     | |  | |  |   |  |    |  \     ||     ||     | |  |  ')
    print('|_____||__|__| \___||____/      \___/ |__|\_|    |_____||____||__|   |__|   |____\____| \__,_||_____| |__|  ')
    print('\nIf this is your first time playing - I would suggest go for EASY')
    print('\nIf you are feeling brave, go for the DIFFICULT')
    level = input('\nSelect your level (Easy/Difficult) > ')
    if (level.lower()=='difficult'):
        return 'difficult'
    else:
        return 'easy'                                                                                                                                          

def loadEasyMap ():
    map1 = ([[0,'M','D'], ['M',0,0], [0,1,'M']])
    map2 = ([['M',0,0], [0,1,0], ['D','M','M']])
    map3 = ([[0,1,'M'], [0,'M',0], [0,'D','M']])
    mapList = [map1, map2, map3]
    randomId = random.randrange(len(mapList))
    finalMap = mapList[randomId]
    return finalMap

def loadPlayerEasyMap():
    playerMap = ([['X','X','X'], ['X','X','X'], ['X','X','X']])
    return playerMap

def loadDifficultMap ():
    map1 = ([['M',0,'D',0,0], ['M',0,0,0,'M'], [1,'M',0,0,0], [0,0,0,'M',0], [0,'M',0,0,0]])
    map2 = ([[0,0,1,0,0], ['M',0,0,0,'M'], [0,'M',0,0,0], ['M',0,0,'D',0], [0,'M',0,0,'M']])
    map3 = ([['M',0,'M',0,0], [0,0,0,'M',0], [0,'M',0,0,1], ['D',0,0,'M',0], [0,'M',0,0,0]])
    mapList = [map1, map2, map3]
    randomId = random.randrange(len(mapList))
    finalMap = mapList[randomId]
    return finalMap

def loadPlayerDifficultMap():
    playerMap = ([['X','X','X','X','X'], ['X','X','X','X','X'], ['X','X','X','X','X'],['X','X','X','X','X'],['X','X','X','X','X']])
    return playerMap

def monsterAttack(move, life):
    print('\nOH NO! You have been attacked by a SEA MONSTER')
    print('      .----.__       ')
    print('     /---.__  \      ')
    print('    /       `\ |     ')
    print('   | o     o  \|     ')
    print('  ./| .vvvvv.  |\    ')
    print(' / /| |     |  | \   ')
    print('//  | ^vvvv^   |  \  ')
    print('     \          |  \\')
    print('     |          |   ~')
    print('  _ /    .      |    ')
    print('   -|_/\/ `--.--|_   ')
    if(life>1):
        print('\nYou lose 1 life! But do not worry. You still have '+str(life)+' lives left!')
    else:
        print('\nBe Careful! You only have 1 life left')
    print('\nPlease do not move towards '+(move.title()))
    input('\nPress Enter to continue > ')
    return 

def win():
    print('\n__________________ C O N G R A T U L A T I O N S ____________________________ ')
    print(' _______________    ')
    print('/\____;;___;;___\   ')
    print('| /  **(()      /   ')
    print(' `. ())oo()ooo()`.  ')
    print('  |\(%()*^^()^\%()\ ')
    print(' %| |-%------------|')
    print('% \ | %  ))    ))  |')
    print('%  \|%_____________|')
    print('\nThe TREASURE is yours! Do not forget to share it with your friends')
    playAgain = input('\nDo you want to play again?! (Yes/No) > ')
    if(playAgain.lower()=='yes'):
        beginGame()
    else:
        endGame()

def tryAgain():
    print('\nI told you not to go near those SEA MONSTERS! You are DEAD!')
    print('     ______     ')
    print('  .-"      "-.  ')
    print(' /            \ ')
    print('|              |')
    print('|,  .-.  .-.  ,|')
    print('| )(__/  \__)( |')
    print('|/     /\     \|')
    print('(_     ^^     _)')
    print(' \__|IIIIII|__/ ')
    print('  | \IIIIII/ |  ')
    print('  \          /  ')
    print('   `--------`   ')
    playAgain = input('\nDo you want to play again? (Yes/No) > ')
    if(playAgain.lower()=='yes'):
        beginGame()
    else:
        endGame()

def endGame():
    exit(0)

def beginGame():
    life = 3
    lookAround = True
    moves = 0
    level = chooseLevel()
    if(level == 'easy'):
        map = loadEasyMap()
        playerMap = loadPlayerEasyMap()
    else:
        map = loadDifficultMap()
        playerMap = loadPlayerDifficultMap()
    
    n=len(map)
    for i in range(len(map)):
        for j in range(len(map[i])):
            if(map[i][j]==1):
                currentPosX = i
                currentPosY = j
                break

    playerMap[currentPosX][currentPosY]='△'
   
    while(life!=0):
        if(moves<=1):
            print('\nThis is your current position after '+str(moves)+' move\n')
        else:
            print('\nThis is your current position after '+str(moves)+' moves\n')
        print(' ',end='')
        for i in range((n*4)-1):
            print('-',end='')
        print()

        for i in range(len(playerMap)):
            for j in range(len(playerMap[i])):
                print('| '+playerMap[i][j],end=" ")
                if(j==(len(playerMap[i])-1)):
                    print('|')
            print(' ',end='')
            for i in range((n*4)-1):
                print('-',end='')
            print()

        if(lookAround):
            move = input('\nPlay your move (Left/Right/Down/Up & Look Around) > ')
        else:
            move = input('\nPlay your move (Left/Right/Down/Up) > ')

        if(move.lower()=="left"):
            if(map[currentPosX][(currentPosY-1)%n]=='D'):
                playerMap[currentPosX][(currentPosY-1)%n]='D'
                win()
            elif(map[currentPosX][(currentPosY-1)%n]=='M'):
                life -= 1
                if(life!=0):
                    playerMap[currentPosX][(currentPosY-1)%n]='M'
                    monsterAttack(move, life)
                else:
                    tryAgain()
            else:
                moves += 1
                playerMap[currentPosX][currentPosY]='0'
                map[currentPosX][currentPosY]='0'
                currentPosY = (currentPosY-1)%n
    
        elif(move.lower()=="right"):
            if(map[currentPosX][(currentPosY+1)%n]=='D'):
                playerMap[currentPosX][(currentPosY+1)%n]='D'
                win()
            elif(map[currentPosX][(currentPosY+1)%n]=='M'):
                life -= 1
                if(life!=0):
                    playerMap[currentPosX][(currentPosY+1)%n]='M'
                    monsterAttack(move, life)
                else:
                    tryAgain()
            else:
                moves += 1
                playerMap[currentPosX][currentPosY]='0'
                map[currentPosX][currentPosY]='0'
                currentPosY = (currentPosY+1)%n

        elif(move.lower()=="up"):
            if(map[(currentPosX-1)%n][currentPosY]=='D'):
                playerMap[(currentPosX-1)%n][currentPosY]='D'
                win()
            elif(map[(currentPosX-1)%n][currentPosY]=='M'):
                life -= 1
                if(life!=0):
                    playerMap[(currentPosX-1)%n][currentPosY]='M'
                    monsterAttack(move, life)
                else:
                    tryAgain()
            else:
                moves += 1
                playerMap[currentPosX][currentPosY]='0'
                map[currentPosX][currentPosY]='0'
                currentPosX = (currentPosX-1)%n

        elif(move.lower()=="down"):
            if(map[(currentPosX+1)%n][currentPosY]=='D'):
                playerMap[(currentPosX+1)%n][currentPosY]='D'
                win()
            elif(map[(currentPosX+1)%n][currentPosY]=='M'):
                life -= 1
                if(life!=0):
                    playerMap[(currentPosX+1)%n][currentPosY]='M'
                    monsterAttack(move, life)
                else:
                    tryAgain()
            else:
                moves += 1
                playerMap[currentPosX][currentPosY]='0'
                map[currentPosX][currentPosY]='0'
                currentPosX = (currentPosX+1)%n
        
        elif(move.lower()=="look around"):
            monsterFound = False
            if(map[currentPosX][(currentPosY-1)%n]=='M'):
                playerMap[currentPosX][(currentPosY-1)%n]='M'
                monsterFound = True
            elif(map[currentPosX][(currentPosY+1)%n]=='M'):
                playerMap[currentPosX][(currentPosY+1)%n]='M'
                monsterFound = True
            elif(map[(currentPosX-1)%n][(currentPosY)]=='M'):
                playerMap[(currentPosX-1)%n][(currentPosY)]='M'
                monsterFound = True
            elif(map[(currentPosX+1)%n][(currentPosY)]=='M'):
                playerMap[(currentPosX+1)%n][(currentPosY)]='M'
                monsterFound = True
            lookAround = False
            if(monsterFound):
                print('\nOh! Looks like there are Sea Monsters around. Be careful!')
                input('\nPress Enter to continue > ')
            else:
                print('\nLucky you! There are no sea monsters around')
                input('\nPress Enter to continue > ')

        elif(move.lower()=="exit"):
            break 
        else:
            print('\nSorry smartypants! You will have to try again \n')
            input('\nPress Enter to continue > ')
        playerMap[currentPosX][currentPosY]='△'
        map[currentPosX][currentPosY]='1'
      #  print('\n'.join(['\t'.join([str(cell) for cell in row]) for row in map]))


instructions()

beginGame()



    