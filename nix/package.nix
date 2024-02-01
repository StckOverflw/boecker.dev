{ mkPnpmPackage, inter, pkgs }:
  mkPnpmPackage {
    src = ../.;
    nodejs = pkgs.nodejs_20;
    distDir = "dist";
  }
