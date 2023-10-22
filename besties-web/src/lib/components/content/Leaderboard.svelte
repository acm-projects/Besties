import { onMount } from "svelte";

<script>
    import Filetable from "./filetable.svelte";
    import UploadRow from "./uploadRow.svelte";
    import {getStorage, ref, getMetadata, listAll} from "firebase/storage";
    import {onMount} from "svelte"
</script>