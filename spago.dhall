{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ name = "subtlecrypto"
, dependencies =
  [ "aff"
  , "arraybuffer-types"
  , "console"
  , "effect"
  , "either"
  , "exceptions"
  , "foreign"
  , "functions"
  , "maybe"
  , "prelude"
  , "promises"
  , "psci-support"
  , "tuples"
  , "unsafe-coerce"
  ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs", "test/**/*.purs" ]
}
