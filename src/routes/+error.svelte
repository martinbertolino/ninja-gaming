<script>
    import { page } from '$app/stores';
  </script>
  
  <h1>{$page?.error?.message ?? "ERROR UNKNOWN"}</h1>