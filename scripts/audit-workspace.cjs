#!/usr/bin/env node

const { execFileSync } = require('node:child_process')

function getTrackedFiles() {
  const output = execFileSync('git', ['ls-files', '-z'], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })

  return output.split('\0').filter(Boolean)
}

function groupMatches(files) {
  const groups = [
    {
      label: 'Tracked build output under dist/',
      matches: files.filter((file) => file === 'dist' || file.startsWith('dist/')),
    },
    {
      label: 'Tracked macOS metadata',
      matches: files.filter((file) => file.endsWith('.DS_Store')),
    },
    {
      label: 'Tracked raw HEIC images',
      matches: files.filter((file) => /\.(heic)$/i.test(file)),
    },
    {
      label: 'Tracked raw MOV videos',
      matches: files.filter((file) => /\.(mov)$/i.test(file)),
    },
  ]

  return groups.filter((group) => group.matches.length > 0)
}

function printGroup(group) {
  console.error(`\n[FAIL] ${group.label}: ${group.matches.length}`)
  group.matches.slice(0, 12).forEach((file) => console.error(`  - ${file}`))
  if (group.matches.length > 12) {
    console.error(`  - ... and ${group.matches.length - 12} more`)
  }
}

try {
  const trackedFiles = getTrackedFiles()
  const failingGroups = groupMatches(trackedFiles)

  if (failingGroups.length === 0) {
    console.log('Workspace audit passed.')
    console.log('No tracked dist output or banned raw/media junk was found.')
    process.exit(0)
  }

  console.error('Workspace audit failed.')
  console.error('Repository policy violations were found:')
  failingGroups.forEach(printGroup)
  process.exit(1)
} catch (error) {
  console.error('Workspace audit could not run.')
  console.error(error.message)
  process.exit(1)
}
