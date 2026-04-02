# XMatters-lab
Website
 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index 5d5f64038d85bcb414c8123dc69df8e670526aa4..1e05f5ad90d6937ed236e1bebe7db0c00f593bc5 100644
--- a/README.md
+++ b/README.md
@@ -1,2 +1,17 @@
-# XMatters-lab
-Website
+# FEA & Structure Design Website
+
+A lightweight static website for concept-phase structural design checks.
+
+## Features
+
+- Quick beam deflection estimator for:
+  - Cantilever beam with end point load
+  - Simply supported beam with center point load
+- Material presets for steel, aluminum, and concrete
+- Structure design checklist for early-stage engineering reviews
+
+## Run locally
+
+Open `index.html` in your browser.
+
+No build tools are required.
 
EOF
)
