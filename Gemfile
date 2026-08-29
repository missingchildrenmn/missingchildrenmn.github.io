source "https://rubygems.org"

# This site is built and deployed by GitHub Pages' built-in Jekyll build, which
# uses its own pinned dependency set and reads neither this file nor a lockfile.
# The github-pages gem exists only so that local preview matches production:
#
#     bundle install
#     bundle exec jekyll serve
#
# It supplies Jekyll itself plus every plugin GitHub Pages allows, including
# jekyll-feed and the jekyll-remote-theme support that `remote_theme:` in
# _config.yml depends on. Don't add plugin gems it already bundles, and don't
# pin their versions here -- that only creates conflicts with its pins. Plugins
# still need to be listed under `plugins:` in _config.yml to be enabled.
#
# To pick up newer GitHub Pages dependency versions: bundle update github-pages
gem "github-pages", group: :jekyll_plugins

# Windows and JRuby do not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :windows, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows. 0.2.0 is the first
# release that builds on Ruby 3.x; this is optional, so drop the line if it
# gives you trouble.
gem "wdm", "~> 0.2", :platforms => [:windows]
