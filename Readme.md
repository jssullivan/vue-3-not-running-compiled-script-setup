
Minimum working example of Compiled Vue 2 Script Setup components not working in Vue 3

### Repo Instructions
1. Pull down this Repository 
2. Run `pnpm i && pnpm dev`
3. Open the app, Click the first button of a Compiled Vue 3 component working correctly
4. Click the second button, this is a Compiled Vue 2 component that uses the Composition Api with defineComponent
5. Click the last button, this is a Compiled Vue 2 component that uses script setup, see this crashes when trying to read the ref `hello_vue_team`

The Components were specifically crafted so that converting them from Vue 2 -> Vue 3 would require a change to the code. Specifically the breaking change where v-for template's `keys` aren't defined on the children (https://v3-migration.vuejs.org/breaking-changes/key-attribute.html). 
