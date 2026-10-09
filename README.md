# Connectome

A phone that does one thing. 1,000 invisible points, each tied to another by an invisible line. Every half second each line rolls a number, and shows only on a 6. Two ways to see it: **Lines** (the lines themselves, on black) and **Fill** (the lines stay hidden; the shapes they enclose are colored, no two neighbors alike).

## Gestures

| Do this | It does this |
|---|---|
| Tilt the phone | Points drift slowly downhill |
| Hold one finger, then tilt forward or back | Fewer or more lines |
| Hold one finger, then tilt left or right | Slower or faster |
| Double-tap | Switch between Lines and Fill |
| Shake | Scatter: start over with new points |
| Hold three fingers for about a second | Open the studio (every setting, as sliders) |
| Side button | Sleep and wake. While asleep, the points keep drifting, so it wakes up changed |

If motion isn't available, holding one finger and dragging does the same as hold-and-tilt. On a computer: drag with the mouse, double-click, press **S** for the studio and **R** for new points.

## Put it online (once, about 15 minutes)

1. Make a free account at github.com.
2. Click **New repository**. Name it `connectome`, set it to **Public**, and create it.
3. On the new repository's page, click **uploading an existing file**. Drag in everything from this folder, including the `instructions` folder, and click **Commit changes**.
4. Go to **Settings → Pages**. Under "Branch," choose `main` and `/ (root)`, then **Save**.
5. After a minute or two the page shows your address, like `https://yourname.github.io/connectome/`.

## Put it on the iPhone

1. Open that address in **Safari** (not another browser).
2. Tap **Share → Add to Home Screen**. Make sure **Open as Web App** is on. Tap **Add**.
3. Open it from the new icon. Tap the screen once: iOS asks to allow motion. Allow it. (iOS asks again whenever the app fully restarts; the first tap is always the one that asks.)
4. Open it once with Wi-Fi on so it saves itself for offline use. After that it works in airplane mode.

## Make it an object

1. **Settings → Focus**: make a Focus that allows no notifications, and turn it on. Or use airplane mode.
2. Long-press the home screen and move every other app to the App Library, leaving only Connectome. Use a still of the piece as the home screen and lock screen wallpaper (take a screenshot of it: side button + volume up).
3. **Settings → Accessibility → Guided Access**: turn it on. In **Passcode Settings**, set the code you'll use to get out. Set **Display Auto-Lock** to **Never**.
4. Open Connectome, then **triple-click the side button**. Tap **Options** and leave **Side Button**, **Motion** and **Touch** on. Tap **Start**.

To get out: triple-click the side button and enter your code.

## Changing it

- **From the phone:** hold three fingers to open the studio. Changes are saved on the phone. "Use file settings" goes back to whatever settings.json says.
- **From your laptop:** edit `settings.json` on GitHub (open it, click the pencil, save). The phone picks it up the next time it opens with Wi-Fi. Changes made in the studio take priority over the file until you tap "Use file settings."
- **A new instruction:** describe it to Claude and ask for an instruction file in this format (see `instructions/example-template.js`). Upload it to the `instructions` folder and add its path to `"extra"` in settings.json, like `"extra": ["instructions/rings.js"]`. It shows up in the studio and in the double-tap rotation.

### settings.json

| Setting | Meaning |
|---|---|
| `points` | How many points |
| `range` | Each line rolls 1 to this; it shows on a 6 |
| `life` | Seconds a line stays |
| `speed` | Pace of everything (1 = rolls every half second) |
| `drift` | How far points wander each step |
| `tether` | 0 = pure drift, so clusters dissolve over days. Higher = points stay loosely near home |
| `tilt` | How strongly tilting pushes the points |
| `width` | Line thickness |
| `palette` | `six`, `expanded`, or `spectrum` |
| `instructions` | Which ones are in the double-tap rotation |
| `fastForward` | Keep drifting while the screen is off |
| `extra` | Extra instruction files to load |

## Known limits

- The iPhone status bar (time, battery) can still show along the top. Web apps can't hide it; only a native app can.
- Waking the phone may flash the lock screen for a moment before the piece returns.
- If iOS clears the app from memory during a long sleep, it reloads, picks up the same points, and fast-forwards them.
- If the phone restarts or the battery dies, Guided Access turns off. Open Connectome and triple-click again.
- Updates: if a change on GitHub doesn't show up, open `sw.js`, change `connectome-1` to `connectome-2`, and save. That forces phones to refresh everything.
