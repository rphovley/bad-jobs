<script lang="ts">
  import BadJobs from "@/components/BadJobs.svelte";
</script>

<div class="title">
  <h1>Is your job bad?</h1>
  <p>
    Have you ever wondered: "is my job bad?" If so, this site is for <strong
      >you.
    </strong>
    Join the countless others who have discovered the answer to this age old question
  </p>
</div>
<BadJobs />

<style>
  .title > h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
  p {
    margin: 10px;
  }
</style>
