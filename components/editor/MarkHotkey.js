import isHotkey from 'is-hotkey'

export default function MarkHotkey(options) {
  const { type, key } = options
  const isKey = isHotkey(key)

  // Return our "plugin" object, containing the `onKeyDown` handler.
  return {
    onKeyDown(event, change) {
      // Check that the key pressed matches our `key` option.
      if (!isKey(event)) return

      // Prevent the default characters from being inserted.
      event.preventDefault()

      // Toggle the mark `type`.
      change.toggleMark(type)
      return true
    },
  }
}
