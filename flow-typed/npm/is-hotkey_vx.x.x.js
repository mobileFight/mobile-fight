// flow-typed signature: 0507ef89b2144d157f578ef275bd8dad
// flow-typed version: <<STUB>>/is-hotkey_v^0.1.6/flow_v0.107.0

declare module 'is-hotkey' {
  declare export function isHotkey<T>(keys: string, event: SyntheticEvent<T>): boolean;
  declare export function isHotkey<T>(keys: string): (event: SyntheticEvent<T>) => boolean
}
