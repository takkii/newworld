import gc
import os
import re
import sys
import traceback


def get_frequency(file):
    try:
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

    # TraceBack.
    except Exception:
        db_w = os.path.expanduser('./debug.log')
        with open(db_w, 'a') as log_py:
            traceback.print_exc(file=log_py)

            # throw except.
            raise RuntimeError from None


try:
    if __name__ == '__main__':
        arg_sys = sys.argv
        match_word = arg_sys[1]
        file_name = match_word
        freq = get_frequency(file_name)
        regex_v4 = '^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9]).){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$'
        regex_v6 = '([0-9a-z]{2,3}[^default])'
        un_regex_word = 'undefined'

        try:
            with open("./effect.txt", mode='a') as f:
                for word in sorted(
                        freq,
                        key=freq.get,  # type: ignore
                        reverse=True):
                    match_v4 = re.search(regex_v4, word)
                    match_v6 = re.match(regex_v6, word)
                    un_match_word = re.search(un_regex_word, word)

                    if match_v4:
                        f.write(match_v4.group() + ' (' + str(freq[word]) +
                                ')' + '\n')
                    elif match_v6:
                        f.write(match_v6.group() + ' (' + str(freq[word]) +
                                ')' + '\n')
                    elif un_match_word:
                        f.write(un_match_word.group() + ' (' +
                                str(freq[word]) + ')' + '\n')

        except FileNotFoundError as fileno:
            print('File not found to effect.txt')
            print(fileno)
            exit  # type: ignore

        finally:
            print('Complete wrote, effect.txt')

except ValueError as ext:
    print(ext)
    raise RuntimeError from None

finally:
    gc.collect()
