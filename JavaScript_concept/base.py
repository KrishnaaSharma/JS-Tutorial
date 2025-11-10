import time
import sys

def type_lyric(line):
    for char in line:
        print(char, end='', flush=True)
        time.sleep(0.05)  # character delay
    print()  # new line after each lyric

def print_lyrics():
    lyrics = [
        "Sochu ke milni te bolaanga ki",
        "Teri taan gallaan ch..shaayari",
        "Vekhgi mainu te sochegi kya tu",
        "Mitti da banda main, tu taan pari",
        "Ishqe di gali yach, khoya ae dil ve",
        "Aas lagaaye ik jaaye tu mil ve",
        "Kol tere mainu",
        "Aan de soni",
        "Karaan main kitne jatan o soni",
        "Dooron dooron main"
    ]

    # Delay between lines (in seconds)
    delays = [2.0, 1.8, 2.1, 2.4, 1.7, 2.3, 2.5, 2.0, 1.9, 2.5]

    print("\n🎵 Now Playing - Dooron Dooron 🎵\n")
    time.sleep(1.5)

    for i, line in enumerate(lyrics):
        type_lyric(line)
        time.sleep(delays[i])

# Run the song lyrics animation
print_lyrics()
time.sleep(0.5)
print("\n✨ Song Ended ✨")
