function App() {
  return (
    <div class="flex h-screen flex-col">
      <div class="flex flex-1">
        <aside class="w-20 border-r p-3">[Klassen]</aside>
        <main class="flex flex-1">
          <div class="w-60 border-r bg-gray-50 p-3">[Session]</div>
          <div class="flex flex-1 flex-col">
            <div class="flex justify-between border-b p-3">
              <div class="flex gap-2">
                <button>fett</button>
                <button class="font-bold">kursiv</button>
              </div>
              <button>Session starten</button>
            </div>
            <div class="flex flex-1">
              <div class="flex-1 p-3">[EDITOR]</div>
              <div class="flex w-60 flex-col justify-between border-l">
                <div>[ASSISTANT]</div>
                <div>
                  <div class="flex p-3 text-sm">
                    <input class="mr-3 w-28 border bg-gray-50" type="text" />
                    <button>SENDEN</button>
                  </div>
                  <div class="border-t">[Bibliothek]</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div class="flex justify-between border-t text-xs">
        <div class="bg-blue-500 text-white">[EINSTELLUNGEN]</div>
        <div class="flex">
          <div>[ERSTELLT]</div>
          <div>[BEARBEITET]</div>
        </div>
      </div>
    </div>
  );
}

export default App;
