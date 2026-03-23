import gc
import threading


# Count class
class Count(threading.Thread):

    # use thread
    def __init__(self):
        threading.Thread.__init__(self)

    # run method
    def run(self):
        with open("./effect.txt", mode='r+', encoding='utf-8') as f:
            test = f.read().splitlines()

            # Count Top 15 output
            target_lines = test[0:15]
            for test in target_lines:
                print(test)


# try ~ except ~ finally.
try:
    thread = Count()
    thread.run()
# Custom Exception, raise throw.
except ValueError as ext:
    print(ext)
    raise RuntimeError from None

# Once Exec.
finally:
    # GC collection.
    gc.collect()
