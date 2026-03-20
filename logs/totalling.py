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
        regex = '^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9]).){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$'

        for word in sorted(freq, key=freq.get, reverse=True):  # type: ignore
            matchObj = re.search(regex, word)

            if matchObj:
                print(matchObj.group() + ' (' + str(freq[word]) + ')')

except ValueError as ext:
    print(ext)
    raise RuntimeError from None

finally:
    # GC collection.
    gc.collect()
