import gc
import os
import sys
import threading


# Count class
class Clarify(threading.Thread):

    # use thread
    def __init__(self):
        threading.Thread.__init__(self)

    # run method
    def run(self):
        try:
            arg_sys = sys.argv
            file_name = arg_sys[1]

            with open(os.path.expanduser(file_name),
                      mode='r+',
                      encoding='utf-8') as f:
                word = f.read().splitlines()

                # top line numbers
                top_num = int(0)

                # last line numbers
                last_num = int(15)

                # Count Top 15 output
                target_lines = word[top_num:last_num]
                for word in target_lines:
                    print(word)

        except FileNotFoundError as fileno:
            print('Not found to target file.')
            print(fileno)
            exit  # type: ignore

        finally:
            # Necessary, once exec.
            print('\n Done, processed target file.')


# try ~ except ~ finally.
try:
    thread = Clarify()
    thread.run()

# Custom Exception, raise throw.
except ValueError as ext:
    print(ext)
    raise RuntimeError from None

# Once Exec.
finally:
    # GC collection.
    gc.collect()
