import gc
import threading


# Count class
class Clarify(threading.Thread):

    # use thread
    def __init__(self):
        threading.Thread.__init__(self)

    # run method
    def run(self):
        try:
            with open("./effect.txt", mode='r+', encoding='utf-8') as f:
                word = f.read().splitlines()

                # Count Top 15 output
                target_lines = word[0:15]
                for word in target_lines:
                    print(word)

        except FileNotFoundError as fileno:
            print('File not found to effect.txt')
            print(fileno)
            exit  # type: ignore

        finally:
            print('\n Done, processed to effect.txt.')


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
