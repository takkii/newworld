import os
import sys


def get_frequency(file):
    freq = {}

    file_data = open(os.path.expanduser(file))
    file_data.close

    for line in file_data:
        words = line.split()

        for word in words:
            word = word.rstrip('.,:!?)"')
            word = word.lstrip('("')

            if word in freq:
                freq[word] += 1
            else:
                freq[word] = 1

    return freq


if __name__ == '__main__':
    arg_sys = sys.argv
    match_word = arg_sys[1]
    file_name = match_word
    freq = get_frequency(file_name)

    for word in sorted(freq, key=freq.get, reverse=True):

        print(word + ' (' + str(freq[word]) + ')')
